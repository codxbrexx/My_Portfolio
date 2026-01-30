import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiBriefcase, FiUsers, FiMessageSquare, FiHelpCircle, FiCheck, FiX } from "react-icons/fi";

const CONTACT_TYPES = [
  { id: 'job', label: 'Job Opportunity', icon: <FiBriefcase />, color: 'border-green-500 text-green-500 shadow-green-500/20' },
  { id: 'project', label: 'Project', icon: <FiUsers />, color: 'border-blue-500 text-blue-500 shadow-blue-500/20' },
  { id: 'consultation', label: 'Consultation', icon: <FiMessageSquare />, color: 'border-violet-500 text-violet-500 shadow-violet-500/20' },
  { id: 'other', label: 'Other', icon: <FiHelpCircle />, color: 'border-orange-500 text-orange-500 shadow-orange-500/20' }
];

const FormField = ({ label, error, children, required = false, theme }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-2"
  >
    <label className={`block text-xs font-mono tracking-widest uppercase ml-1 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
      {label} {required && <span className="text-pink-500">*</span>}
    </label>
    {children}
    <AnimatePresence>
      {error && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="flex items-center gap-2 text-pink-500 text-xs font-mono ml-1 mt-1"
        >
          <FiX size={10} /> {error}
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const ContactTypeSelector = ({ selected, onSelect, theme }) => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
    {CONTACT_TYPES.map((type) => {
      const isSelected = selected === type.id;
      return (
        <button
          key={type.id}
          type="button"
          onClick={() => onSelect(type.id)}
          className={`
                    relative p-6 text-center border-2 transition-all duration-300 group
                    ${isSelected
              ? (theme === 'light' ? `bg-white ${type.color}` : `bg-[#0a0a0a] ${type.color}`)
              : (theme === 'light' ? 'bg-gray-50 border-gray-200 hover:border-black' : 'bg-white/5 border-white/5 hover:border-white')
            }
                `}
        >
          <div className={`text-2xl mb-3 flex justify-center transition-transform duration-300 group-hover:scale-110 ${isSelected ? '' : (theme === 'light' ? 'text-gray-400' : 'text-gray-500')}`}>
            {type.icon}
          </div>
          <div className={`text-xs font-mono font-bold uppercase ${isSelected ? '' : (theme === 'light' ? 'text-gray-600' : 'text-gray-400')}`}>
            {type.label}
          </div>

          {/* Active Indicator Corner */}
          {isSelected && (
            <div className={`absolute top-0 right-0 w-3 h-3 ${type.color.split(' ')[0].replace('border-', 'bg-')}`} />
          )}
        </button>
      );
    })}
  </div>
);

export default function ContactForm({ theme }) {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', contactType: '', urgency: 'medium',
    subject: '', message: '', budget: '', timeline: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name Req.';
    if (!formData.email.trim()) newErrors.email = 'Email Req.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid Email';
    if (!formData.contactType) newErrors.contactType = 'Select Type';
    if (!formData.subject.trim()) newErrors.subject = 'Subject Req.';
    if (!formData.message.trim()) newErrors.message = 'Message Req.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '', email: '', company: '', contactType: '', urgency: 'medium',
        subject: '', message: '', budget: '', timeline: ''
      });
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`text-center py-20 px-8 border-2 ${theme === 'light'
          ? 'bg-green-50 border-green-500 text-green-900'
          : 'bg-green-500/10 border-green-500 text-green-100'
          }`}
      >
        <div className="text-6xl mb-6">✨</div>
        <h3 className="text-3xl font-['Syne'] font-bold uppercase mb-4">Message Sent</h3>
        <p className="font-mono text-sm opacity-80 mb-8 max-w-md mx-auto">
          Signal received. I will analyze your request and re-establish communication shortly.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className={`px-8 py-3 text-sm font-bold uppercase tracking-wider border-2 transition-all ${theme === 'light'
            ? 'border-green-900 text-green-900 hover:bg-green-900 hover:text-white'
            : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-black'}`}
        >
          Send Another
        </button>
      </motion.div>
    );
  }

  const inputClassName = `
    w-full px-4 py-4 rounded-none border-2 outline-none transition-all duration-300 font-mono text-sm
    ${theme === 'light'
      ? 'bg-gray-50 border-gray-200 text-black placeholder-gray-400 focus:border-violet-600 focus:bg-white'
      : 'bg-[#0a0a0a] border-white/10 text-white placeholder-gray-600 focus:border-violet-500 focus:bg-black'
    }
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
        {/* Contact Type */}
        <FormField label="1. Project Context" required error={errors.contactType} theme={theme}>
          <ContactTypeSelector
            selected={formData.contactType}
            onSelect={(type) => setFormData(prev => ({ ...prev, contactType: type }))}
            theme={theme}
          />
        </FormField>

        {/* Basic Info */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-4 opacity-50 font-mono text-xs uppercase tracking-widest">
            <span>// 02. Identification</span>
            <div className="h-px flex-1 bg-current" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField label="Full Name" required error={errors.name} theme={theme}>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" className={inputClassName} />
            </FormField>
            <FormField label="Email Address" required error={errors.email} theme={theme}>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" className={inputClassName} />
            </FormField>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-4 opacity-50 font-mono text-xs uppercase tracking-widest">
            <span>// 03. Transmission</span>
            <div className="h-px flex-1 bg-current" />
          </div>

          <FormField label="Subject" required error={errors.subject} theme={theme}>
            <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Brief summary of your inquiry..." className={inputClassName} />
          </FormField>

          <FormField label="Message Payload" required error={errors.message} theme={theme}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Detailed project requirements, timeline estimates, or general queries..."
              rows={6}
              className={`${inputClassName} resize-none`}
            />
          </FormField>
        </div>

        <div className="pt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-5 text-sm font-bold uppercase tracking-widest border-2 transition-all duration-300 relative overflow-hidden group
                ${theme === 'light'
                ? 'bg-black text-white border-black hover:bg-gray-900'
                : 'bg-white text-black border-white hover:bg-gray-200'
              } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              {isSubmitting ? 'Transmitting...' : (
                <>
                  Initialize Transmission <FiSend />
                </>
              )}
            </span>
          </button>
        </div>
      </form>
    </motion.div>
  );
}
