import React, { useState } from 'react';
import { collection, doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import emailjs from '@emailjs/browser';
import {
    Mail,
    User,
    MessageSquare,
    Send,
    CheckCircle,
    AlertCircle
} from 'lucide-react';

const ContactForm = ({ isDarkMode }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'
    const [fadeOut, setFadeOut] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const emailID = formData.email.replace(/[^\w.-]/g, '@'); // safe ID
            const docRef = doc(db, 'contacts', emailID);
            const existing = await getDoc(docRef);

            const isDuplicate =
                existing.exists() &&
                existing.data().name === formData.name &&
                existing.data().message === formData.message;

            const status = isDuplicate ? 'duplicate' : 'new';

            await setDoc(docRef, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                timestamp: serverTimestamp(),
                status: status
            });

            console.log(`✅ Message saved with status: ${status}`);

            // 📨 Send Email Notification
            try {
                const emailResponse = await emailjs.send(
                    'service_jpg79th',     // Replace this
                    'template_f3k7mje',    // Replace this
                    {
                        user_name: formData.name,
                        user_email: formData.email,
                        user_message: formData.message,
                        user_time: new Date().toLocaleString(),
                    },
                    'i0atqHgUBuRGuwUNL'      // Replace this
                );

                console.log("✅ EmailJS Success:", emailResponse.status, emailResponse.text);
            } catch (emailError) {
                console.error("❌ EmailJS Error:", emailError);
            }


            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Start fade animation
            setTimeout(() => setFadeOut(true), 4500);
            setTimeout(() => {
                setSubmitStatus(null);
                setFadeOut(false);
            }, 5000);
        } catch (error) {
            console.error('❌ Firestore Error:', error);
            setSubmitStatus('error');

            setTimeout(() => setFadeOut(true), 4500);
            setTimeout(() => {
                setSubmitStatus(null);
                setFadeOut(false);
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className={`p-8 rounded-xl transition-colors duration-300 ${isDarkMode
                ? 'bg-gradient-to-br from-gray-700 to-gray-600'
                : 'bg-gradient-to-br from-blue-50 to-emerald-50'
                }`}
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2 ...">
                        <User className="w-4 h-4" />
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${isDarkMode
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                            : 'bg-white border-gray-300 text-gray-900'
                            }`}
                        placeholder="Your Name"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2 ...">
                        <Mail className="w-4 h-4" />
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${isDarkMode
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                            : 'bg-white border-gray-300 text-gray-900'
                            }`}
                        placeholder="your.email@example.com"
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2 ...">
                        <MessageSquare className="w-4 h-4" />
                        Message
                    </label>
                    <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${isDarkMode
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                            : 'bg-white border-gray-300 text-gray-900'
                            }`}
                        placeholder="Tell me about the opportunity or just say hello!"
                    ></textarea>
                </div>

                {/* Status Message */}
                {submitStatus && (
                    <div
                        className={`p-4 rounded-lg flex items-center gap-3 transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'
                            } ${submitStatus === 'success'
                                ? isDarkMode
                                    ? 'bg-green-900 text-green-300 border border-green-700'
                                    : 'bg-green-50 text-green-800 border border-green-200'
                                : isDarkMode
                                    ? 'bg-red-900 text-red-300 border border-red-700'
                                    : 'bg-red-50 text-red-800 border border-red-200'
                            }`}
                    >
                        {submitStatus === 'success' ? (
                            <>
                                <CheckCircle className="w-5 h-5" />
                                <span>Message sent successfully! I'll get back to you soon.</span>
                            </>
                        ) : (
                            <>
                                <AlertCircle className="w-5 h-5" />
                                <span>Failed to send message. Please try again or contact me directly.</span>
                            </>
                        )}
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transform transition-all duration-200 hover:scale-105 ${isDarkMode
                        ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-500/25 disabled:bg-gray-600'
                        : 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400'
                        }`}
                >
                    {isSubmitting ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            Send Message
                        </>
                    )}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
