"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ModalType = "privacy" | "terms" | null;

export default function LegalModals() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <>
      <div className="flex gap-6 text-sm">
        <button onClick={() => setActiveModal("privacy")} className="hover:text-white transition-colors cursor-pointer text-slate-300">Privacy Policy</button>
        <button onClick={() => setActiveModal("terms")} className="hover:text-white transition-colors cursor-pointer text-slate-300">Terms &amp; Conditions</button>
        <a href="/faq" className="hover:text-white transition-colors text-slate-300">FAQ</a>
      </div>

      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col relative z-10"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
                <h2 className="text-2xl font-bold text-[var(--color-dark)]">
                  {activeModal === "privacy" ? "Privacy Policy" : "Terms & Conditions"}
                </h2>
                <button 
                  onClick={closeModal}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 overflow-y-auto custom-scrollbar text-slate-600 space-y-6">
                {activeModal === "privacy" && (
                  <div className="space-y-6">
                    <section>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Introduction</h3>
                      <p>At InnovaCentra Technologies, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
                    </section>
                    
                    <section>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Information We Collect</h3>
                      <p className="mb-2">We may collect the following information:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Name, Email Address, Phone Number, Company Name</li>
                        <li>Information submitted through contact forms</li>
                        <li>Browser and device information, IP address</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">How We Use Your Information</h3>
                      <p className="mb-2">We use the information to:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Respond to enquiries</li>
                        <li>Provide website and software development services</li>
                        <li>Send quotations and proposals</li>
                        <li>Improve our website performance</li>
                        <li>Communicate project updates</li>
                        <li>Provide customer support</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Cookie Policy</h3>
                      <p>Cookies are small text files stored on your device that help improve website functionality and user experience. We use cookies to remember user preferences, analyze website traffic, and enhance user experience. You can disable cookies through your browser settings, however, some website features may not function properly.</p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Third-Party Services & Security</h3>
                      <p>We may use third-party services such as hosting providers, email services, and analytics tools. These providers have their own privacy policies. We implement reasonable security measures to protect your personal information from unauthorized access, misuse, or disclosure.</p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Contact Us</h3>
                      <p>If you have any questions regarding this Privacy Policy, please contact:<br/>
                      <strong>InnovaCentra Technologies</strong><br/>
                      Email: innovacentratech@gmail.com<br/>
                      Phone: +91 8220614407</p>
                    </section>
                  </div>
                )}

                {activeModal === "terms" && (
                  <div className="space-y-6">
                    <section>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Acceptance of Terms</h3>
                      <p>By accessing and using this website, you agree to comply with these Terms & Conditions.</p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Services</h3>
                      <p className="mb-2">InnovaCentra Technologies provides:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Website Development</li>
                        <li>Custom Software Development</li>
                        <li>SEO Services & API Integrations</li>
                        <li>UI/UX Design</li>
                        <li>Website Maintenance & Support</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Intellectual Property</h3>
                      <p>All content on this website including logos, designs, text, graphics, and source code are the property of InnovaCentra Technologies and may not be copied, reproduced, or distributed without written permission.</p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Project Payments</h3>
                      <p>Projects may require an advance payment before work begins. Final delivery will be provided after completion of agreed milestones and receipt of payments. Additional features outside the agreed scope may incur extra charges.</p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Refund Policy</h3>
                      <p>Advance payments made for project initiation are generally non-refundable once the project work has started. If a project is cancelled before work begins, the refund amount will be reviewed on a case-by-case basis. Payments made for completed milestones or delivered services are non-refundable.</p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Client Responsibilities</h3>
                      <p>Clients are responsible for providing accurate project requirements, sharing required content and assets on time, and reviewing and approving deliverables promptly.</p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Limitation of Liability & Changes to Terms</h3>
                      <p>InnovaCentra Technologies shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or services. We reserve the right to update these Terms & Conditions at any time without prior notice.</p>
                    </section>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
