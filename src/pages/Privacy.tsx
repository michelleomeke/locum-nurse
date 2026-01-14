import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Helmet>
        <title>Privacy Policy - LocumNurse</title>
        <meta 
          name="description" 
          content="Privacy Policy for LocumNurse platform" 
        />
      </Helmet>
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-4xl mt-8">
        <h1 className="text-4xl font-bold mb-8">LocumNurse Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Effective Date: 28th October 2025</p>
        
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            LocumNurse ("we," "our," "us") respects the privacy of all users ("you") and is committed to protecting the personal data collected through our mobile and web applications. This Privacy Policy explains how we collect, use, disclose, and safeguard your information in accordance with the Nigeria Data Protection Act (NDPA) 2023 and other applicable laws.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-2">
              We collect personal and professional information necessary to facilitate the delivery of our services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, contact details, and identification documents.</li>
              <li>Professional qualifications and licenses (for nurses).</li>
              <li>Care requirements and related personal details (for clients).</li>
              <li>Payment and transaction information (processed securely through Paystack).</li>
              <li>Device, location, and usage data to enable shift matching and service delivery.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use of Information</h2>
            <p className="mb-2">Your data is used to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verify user identities and maintain secure access to the platform.</li>
              <li>Facilitate communication between clients and nurses.</li>
              <li>Process and confirm payments for services rendered.</li>
              <li>Improve our services, operations, and user experience.</li>
              <li>Comply with legal, regulatory, and internal audit obligations.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Data Sharing and Disclosure</h2>
            <p className="mb-2">
              We do not sell or rent user data. However, we may share information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Paystack (for payment processing and verification).</li>
              <li>Verified partners or third-party service providers essential to platform operations.</li>
              <li>Regulatory authorities, where disclosure is required by law.</li>
            </ul>
            <p className="mt-2">
              All third-party partners are bound by confidentiality and data protection obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
            <p>
              LocumNurse retains user data for as long as necessary to fulfill the purposes stated above, including legal, regulatory, and business record-keeping requirements. Data may be securely archived and periodically reviewed. Information that is no longer required shall be deleted or anonymized in accordance with applicable data protection principles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your information from unauthorized access, loss, misuse, alteration, or disclosure. Despite these safeguards, no system is entirely secure, and users acknowledge this inherent risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. User Rights</h2>
            <p className="mb-2">
              Under the NDPA, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, correct, or update your personal data.</li>
              <li>Withdraw consent to data processing, subject to legal and contractual restrictions.</li>
              <li>Request deletion or restriction of your data, where applicable.</li>
            </ul>
            <p className="mt-2">
              Requests may be directed to <a href="mailto:info.locumnurse@gmail.com" className="text-blue-600 hover:underline">info.locumnurse@gmail.com</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
            <p>
              LocumNurse may amend this Privacy Policy from time to time. Updates will be communicated through our app or website. Continued use of our platform following such updates constitutes acceptance of the revised Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
            <p>
              This Privacy Policy shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
            </p>
          </section>

          <section className="mb-8">
            <p className="text-gray-600">
              For questions or concerns, please contact:
            </p>
            <p className="text-gray-600">
              Email: <a href="mailto:info.locumnurse@gmail.com" className="text-blue-600 hover:underline">info.locumnurse@gmail.com</a>
            </p>
            <p className="text-gray-600">
              LocumNurse, No 1 White House Street Bayeku, Ikorodu Lagos
            </p>
            <p className="text-gray-600">
              Flexible Nursing solution, Anytime, Anywhere.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
