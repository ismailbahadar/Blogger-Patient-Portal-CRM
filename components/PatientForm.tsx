
import React, { useState } from 'react';
import { LZC_OPTIONS, HOSPITAL_OPTIONS } from '../constants';
import { PatientFormData } from '../types';

const PatientForm: React.FC = () => {
  const [formData, setFormData] = useState<PatientFormData>({
    mustahiq_name: '',
    f_name: '',
    cnic: '',
    cell_no: '',
    gender: '',
    age: '',
    lzc_id: '',
    address: '',
    istehqaq_no: '',
    category: '',
    disease_type: '',
    dhq_id: '',
    hospital_id: '',
    amount: '',
    budget: '0',
    year: '2025-26',
    installment: '1&2'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Logic for Google Sheets integration
      // Updated with the URL from your screenshot
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyyagbBIFrwlx4GEPfR5PL6MF9IFXEOF54RhtIZHWEMd8_UU6UHhERZj9rXl5ZL/exec';
      
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // standard for GAS Web Apps to avoid CORS blocks
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      // Since mode is 'no-cors', we won't get a standard response body, 
      // but if the fetch doesn't throw, it usually means it reached the endpoint.
      setSubmitStatus({ 
        type: 'success', 
        message: 'Data successfully recorded to your Google Sheet! Please check your spreadsheet to confirm.' 
      });
      
      // Optional: Clear form on success
      setFormData({
        ...formData,
        mustahiq_name: '',
        f_name: '',
        cnic: '',
        cell_no: '',
        age: '',
        address: '',
        istehqaq_no: '',
        amount: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to save data. Please check your internet connection or script permissions.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div className="bg-indigo-600 px-8 py-6 text-white">
          <h1 className="text-2xl font-bold">Mustahiq Registration Form</h1>
          <p className="text-indigo-100 text-sm mt-1 uppercase tracking-widest font-medium">Fiscal Year: {formData.year} | Installment: {formData.installment}</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {/* Status Messages */}
          {submitStatus.type && (
            <div className={`p-4 rounded-lg flex items-center ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
              <span className="text-sm font-bold uppercase mr-3">{submitStatus.type}:</span>
              <span className="text-sm font-medium">{submitStatus.message}</span>
            </div>
          )}

          {/* Row 1: Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Mustahiq Name <span className="text-red-500">*</span></label>
              <input required name="mustahiq_name" value={formData.mustahiq_name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" placeholder="Enter Full Name" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Father Name <span className="text-red-500">*</span></label>
              <input required name="f_name" value={formData.f_name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" placeholder="Enter Father's Name" />
            </div>
          </div>

          {/* Row 2: Identifiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">CNIC / Form-B <span className="text-red-500">*</span></label>
              <input required name="cnic" value={formData.cnic} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" placeholder="99999-9999999-9" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Contact # <span className="text-red-500">*</span></label>
              <input required name="cell_no" value={formData.cell_no} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" placeholder="03xx-xxxxxxx" />
            </div>
          </div>

          {/* Row 3: Demographics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Gender <span className="text-red-500">*</span></label>
              <select required name="gender" value={formData.gender} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition appearance-none bg-white">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Age <span className="text-red-500">*</span></label>
              <input required type="number" name="age" value={formData.age} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" placeholder="Age" />
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <label className="block text-sm font-bold text-gray-700 mb-2">LZC Name <span className="text-red-500">*</span></label>
              <select required name="lzc_id" value={formData.lzc_id} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition appearance-none bg-white">
                <option value="">Select Local Zakat Committee</option>
                {LZC_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
              </select>
            </div>
          </div>

          {/* Row 4: Address & Cert */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Complete Address <span className="text-red-500">*</span></label>
              <input required name="address" value={formData.address} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" placeholder="Village/Street/Tehsil" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Istehqaq Certificate No <span className="text-red-500">*</span></label>
              <input required name="istehqaq_no" value={formData.istehqaq_no} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" placeholder="Certificate Number" />
            </div>
          </div>

          {/* Row 5: Classification */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Category <span className="text-red-500">*</span></label>
              <select required name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition appearance-none bg-white">
                <option value="">Select Category</option>
                <option value="Poor">Poor</option>
                <option value="Widow">Widow</option>
                <option value="Disable">Disable</option>
                <option value="Orphan">Orphan</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Disease Name <span className="text-red-500">*</span></label>
              <input required name="disease_type" value={formData.disease_type} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" placeholder="e.g. Chronic Renal Failure" />
            </div>
          </div>

          {/* Row 6: Hospital Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 pt-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Hospital Type <span className="text-red-500">*</span></label>
              <select required name="dhq_id" value={formData.dhq_id} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition appearance-none bg-white">
                <option value="">---Select Hospital Type---</option>
                <option value="DHQ.9">DHQ Dir Lower</option>
                <option value="THQ.9">THQ Dir Lower</option>
                <option value="BHU.9">BHU Dir Lower</option>
                <option value="provincial_hospital">Provincial Level Hospital</option>
              </select>
            </div>
            {formData.dhq_id === 'provincial_hospital' && (
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Specific Provincial Hospital <span className="text-red-500">*</span></label>
                <select required name="hospital_id" value={formData.hospital_id} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition appearance-none bg-white">
                  <option value="">Select Hospital</option>
                  {HOSPITAL_OPTIONS.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                </select>
              </div>
            )}
          </div>

          {/* Financials Area */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Expense Amount Required (PKR) <span className="text-red-500">*</span></label>
              <input required type="number" name="amount" value={formData.amount} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition font-mono" placeholder="0.00" min="1" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-500 mb-2 uppercase tracking-tighter">Available Budget (Read-only)</label>
              <input readOnly name="budget" value={formData.budget} className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-500 font-mono" />
            </div>
          </div>

          <div className="flex items-center justify-end space-x-4 pt-6 border-t border-gray-100">
            <button type="reset" className="px-6 py-2 rounded-lg font-bold text-gray-600 hover:bg-gray-100 transition">Reset</button>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`px-10 py-3 rounded-lg font-bold text-white shadow-lg transition transform active:scale-95 ${isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : 'Submit Registration'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;
