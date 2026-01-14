import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Helmet>
        <title>Terms and Conditions - LocumNurse</title>
        <meta 
          name="description" 
          content="Terms and Conditions for using LocumNurse platform" 
        />
      </Helmet>
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-4xl mt-8">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <p className="text-gray-600 mb-8">Effective Date: 28th September 2025</p>
        
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            Welcome to LocumNurse, a digital platform connecting verified nurses with clients who require professional healthcare and support services. By creating an account or using our app, you agree to the following Terms and Conditions:
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Use of the Platform</h2>
            <p>
              LocumNurse provides a platform where clients can post care shifts and nurses can apply for and complete them. All users must provide accurate information, maintain professionalism, and comply with these Terms and any applicable laws or professional standards.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Registration and Eligibility</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nurses must be qualified healthcare professionals with valid credentials.</li>
              <li>Clients must be at least 18 years old and capable of entering binding agreements.</li>
              <li>LocumNurse reserves the right to verify all users before granting full access.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Payments, Fees and Tax deductions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All payments are processed securely through the LocumNurse app.</li>
              <li>Service fees or commissions may apply and will be displayed before payment.</li>
              <li>Nurses agree that LocumNurse will deduct all relevant statutory taxes (including but not limited to PAYE, VAT, or withholding tax, as applicable) from their earnings before remittance.</li>
              <li>Clients acknowledge that all charges displayed on the platform may include applicable statutory taxes, and such taxes will be added to or included in their final billing.</li>
              <li>Refunds or cancellations are subject to LocumNurse's discretion based on case review.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Professional Conduct</h2>
            <p className="mb-2">
              Nurses are expected to provide care with diligence, respect, and confidentiality.
            </p>
            <p>
              Clients must ensure safe working conditions and respectful treatment of all nurses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Confidentiality and Data Protection</h2>
            <p>
              Users must keep all patient and client information confidential. LocumNurse protects personal data in accordance with Nigerian Data Protection regulations and our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Account Suspension or Termination</h2>
            <p>
              LocumNurse may suspend or terminate accounts for misconduct, breach of these Terms, or inactivity exceeding six (6) months. Users removed for inactivity may reapply to join the platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Liability</h2>
            <p>
              LocumNurse acts as a connector between nurses and clients and shall not be liable for damages arising from the actions or omissions of either party. However, LocumNurse ensures reasonable vetting, payment security, and support throughout engagements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
            <p>
              All app content, designs, and materials are the property of LocumNurse and may not be used without prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms are governed by the laws of the Federal Republic of Nigeria. Disputes shall first be resolved amicably; unresolved matters will proceed to arbitration or court within Nigeria.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Updates to Terms</h2>
            <p>
              LocumNurse may revise these Terms periodically. Continued use of the platform after updates constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="mb-8">
            <p className="text-gray-600">
              For inquiries, contact us at <a href="mailto:info.locumnurse@gmail.com" className="text-blue-600 hover:underline">info.locumnurse@gmail.com</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
