
import React from 'react';

const DeploymentGuide: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      <header className="text-center space-y-4 pt-8">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Full Publishing Manual</h1>
        <p className="text-lg text-gray-600">Complete steps to turn this code into a live Blogger-hosted portal.</p>
      </header>

      {/* Phase 1 */}
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <div className="flex items-center space-x-4 mb-2">
          <span className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">1</span>
          <h2 className="text-2xl font-bold text-gray-800">Database Setup (Google Sheets)</h2>
        </div>
        
        <div className="space-y-4 text-gray-700 ml-14">
          <p>This application uses Google Sheets as a database via <strong>Google Apps Script</strong>.</p>
          <ol className="list-decimal space-y-3 ml-5">
            <li>Create a new <strong>Google Sheet</strong>.</li>
            <li>Go to <strong>Extensions > Apps Script</strong>.</li>
            <li>Paste the code below into the editor:</li>
          </ol>
          
          <pre className="bg-gray-900 text-indigo-300 p-5 rounded-xl overflow-x-auto text-xs font-mono shadow-inner">
{`function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  // Append data to the next available row
  sheet.appendRow([
    new Date(), 
    data.mustahiq_name, 
    data.f_name, 
    data.cnic, 
    data.cell_no, 
    data.gender, 
    data.age, 
    data.lzc_id, 
    data.address, 
    data.istehqaq_no, 
    data.category, 
    data.disease_type, 
    data.dhq_id, 
    data.amount,
    data.year
  ]);
  
  return ContentService.createTextOutput("Success")
    .setMimeType(ContentService.MimeType.TEXT);
}`}
          </pre>
          
          <p className="font-semibold text-indigo-600 mt-4 italic">CRITICAL DEPLOYMENT STEP:</p>
          <ul className="list-disc ml-5 space-y-2 text-sm">
            <li>Click <strong>Deploy > New Deployment</strong>.</li>
            <li>Select <strong>Web App</strong>. Set "Execute as" to <strong>Me</strong> and "Who has access" to <strong>Anyone</strong>.</li>
            <li>Copy the <strong>Web App URL</strong> and paste it in <code>components/PatientForm.tsx</code>.</li>
          </ul>
        </div>
      </section>

      {/* Phase 2 */}
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <div className="flex items-center space-x-4 mb-2">
          <span className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">2</span>
          <h2 className="text-2xl font-bold text-gray-800">Host the Application</h2>
        </div>
        
        <div className="space-y-4 text-gray-700 ml-14">
          <p>Blogger cannot host raw React source code. You must build and host the static files first:</p>
          <ol className="list-decimal space-y-3 ml-5">
            <li>Host this React app on <strong>GitHub Pages</strong>, <strong>Vercel</strong>, or <strong>Netlify</strong> (All free).</li>
            <li>Ensure the deployment is public and you have a URL (e.g., <code>https://my-portal.vercel.app</code>).</li>
          </ol>
        </div>
      </section>

      {/* Phase 3 */}
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <div className="flex items-center space-x-4 mb-2">
          <span className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">3</span>
          <h2 className="text-2xl font-bold text-gray-800">Publish on Blogger</h2>
        </div>
        
        <div className="space-y-4 text-gray-700 ml-14">
          <ol className="list-decimal space-y-3 ml-5">
            <li>Go to <strong>Blogger.com > Pages > New Page</strong>.</li>
            <li>Title it "Patient Portal".</li>
            <li>Switch to <strong>HTML View</strong> (pencil icon).</li>
            <li>Paste this iFrame code:</li>
          </ol>
          
          <pre className="bg-gray-100 p-4 rounded-lg text-xs font-mono border border-gray-200">
{`<div style="width: 100%; height: 100vh; overflow: hidden;">
  <iframe 
    src="https://your-hosted-url.com" 
    style="width: 100%; height: 100%; border: none;"
    allow="geolocation; camera; microphone">
  </iframe>
</div>`}
          </pre>
        </div>
      </section>

      {/* Phase 4 */}
      <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <div className="flex items-center space-x-4 mb-2">
          <span className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">4</span>
          <h2 className="text-2xl font-bold text-gray-800">Optimize Blogger Theme</h2>
        </div>
        
        <div className="space-y-4 text-gray-700 ml-14">
          <p>To make it look like a real software portal rather than a blog:</p>
          <ul className="list-disc ml-5 space-y-2">
            <li><strong>Hide Header/Footer</strong>: Go to <strong>Theme > Edit HTML</strong>. Before <code>&lt;/style&gt;</code>, add: 
              {/* Wrapped CSS code in a string literal to prevent JSX parsing errors with curly braces */}
              <code className="bg-gray-100 px-2 py-1 ml-2 text-xs">{`.header-widget, .footer-widget, .sidebar { display: none !important; }`}</code>
            </li>
            <li><strong>Full Width</strong>: In <strong>Theme > Customize > Adjust Widths</strong>, set the entire blog width to 100%.</li>
          </ul>
        </div>
      </section>

      <div className="bg-indigo-900 rounded-2xl p-8 text-center text-white shadow-xl">
        <h3 className="text-xl font-bold mb-2">Ready to Go Live?</h3>
        <p className="text-indigo-200 mb-6">If you have updated the SCRIPT_URL in the code, your portal is ready.</p>
        <button onClick={() => window.print()} className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-bold hover:bg-indigo-50 transition">
          Download PDF Guide
        </button>
      </div>
    </div>
  );
};

export default DeploymentGuide;
