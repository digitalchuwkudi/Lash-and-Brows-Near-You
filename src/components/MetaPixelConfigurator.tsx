import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, Check, HelpCircle, ArrowRight, Eye, Code, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { getMetaPixelId, setMetaPixelId, initMetaPixel, isPixelInitialized, getTestEventCode, setTestEventCode } from '../utils/metaPixel';
import { useLanguage } from '../context/LanguageContext';

export default function MetaPixelConfigurator() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [pixelId, setPixelId] = useState('');
  const [testCode, setTestCode] = useState('');
  const [activeTab, setActiveTab] = useState<'config' | 'guide'>('config');
  const [isSaved, setIsSaved] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setPixelId(getMetaPixelId());
    setTestCode(getTestEventCode());
    setIsInitialized(isPixelInitialized());
  }, [isOpen]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setMetaPixelId(pixelId);
    setTestEventCode(testCode);
    initMetaPixel();
    setIsInitialized(isPixelInitialized());
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <>
      {/* Small Toggle Link in the footer/navbar or floating */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center space-x-1.5 text-xs font-bold text-gray-500 hover:text-brand tracking-widest uppercase transition-colors"
      >
        <Settings size={12} className="text-brand animate-spin-slow" />
        <span>{language === 'en' ? 'Meta Ads Center' : 'Centre de Pub Meta'}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-gray-950 rounded-[32px] border border-gray-100 dark:border-gray-900 w-full max-w-2xl overflow-hidden shadow-2xl relative z-10 flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-8 border-b border-gray-100 dark:border-gray-900 bg-brand/5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-brand/10 p-3 rounded-2xl text-brand">
                      <Settings size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-gray-900 dark:text-white leading-none">
                        Meta Pixel & Lead Ads Hub
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mt-1">
                        {language === 'en' ? 'For Lead Objective Campaigns' : 'Pour les Campagnes d\'Objectif de Leads'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-white text-lg font-black"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-100 dark:border-gray-900 px-6">
                <button
                  onClick={() => setActiveTab('config')}
                  className={`px-4 py-4 font-black text-sm uppercase tracking-wider border-b-2 transition-all ${
                    activeTab === 'config'
                      ? 'border-brand text-brand'
                      : 'border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
                  }`}
                >
                  {language === 'en' ? 'Pixel Configuration' : 'Configuration Pixel'}
                </button>
                <button
                  onClick={() => setActiveTab('guide')}
                  className={`px-4 py-4 font-black text-sm uppercase tracking-wider border-b-2 transition-all ${
                    activeTab === 'guide'
                      ? 'border-brand text-brand'
                      : 'border-transparent text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
                  }`}
                >
                  {language === 'en' ? 'Meta Ads Guide' : 'Guide de Pub Meta'}
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-8 overflow-y-auto flex-grow space-y-6">
                {activeTab === 'config' ? (
                  <div className="space-y-6">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                      {language === 'en'
                        ? 'Connect your Facebook / Meta Pixel here to automatically track leads and conversions. The tracking code triggers standard "Lead" events for WhatsApp Bookings, Email/Manual Bookings, and Setmore Booking clicks.'
                        : 'Connectez votre Pixel Facebook / Meta ici pour suivre automatiquement vos prospects et conversions. Le code de suivi déclenche des événements "Prospect/Lead" standard lors des clics sur WhatsApp, les réservations manuelles et les réservations Setmore.'}
                    </p>

                    <form onSubmit={handleSave} className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block">
                          {language === 'en' ? 'Your Meta Pixel ID' : 'Votre ID Pixel Meta'}
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 123456789012345"
                          value={pixelId}
                          onChange={(e) => setPixelId(e.target.value.replace(/\D/g, ''))}
                          className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 text-sm font-bold dark:text-white focus:outline-none focus:border-brand transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest block flex items-center">
                          <span>{language === 'en' ? 'Meta Test Event Code (Optional)' : 'Code d\'Événement de Test (Optionnel)'}</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. TEST12345"
                          value={testCode}
                          onChange={(e) => setTestCode(e.target.value.trim())}
                          className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl px-6 py-4 text-sm font-bold dark:text-white focus:outline-none focus:border-brand transition-colors"
                        />
                        <p className="text-[10px] text-gray-400 font-medium">
                          {language === 'en'
                            ? 'Enter the active test event code from your Events Manager "Test Events" tab to watch your clicks and bookings fire live in real-time!'
                            : 'Saisissez le code d\'événement de test de votre onglet "Événements de test" pour voir vos clics et réservations en temps réel !'}
                        </p>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-brand text-white py-4 rounded-2xl font-black text-sm transition-all transform hover:-translate-y-0.5 hover:scale-102 flex items-center justify-center shadow-lg shadow-brand/10 hover:opacity-90"
                      >
                        {language === 'en' ? 'Save & Connect Hub' : 'Enregistrer et Connecter'}
                      </button>
                    </form>

                    {isSaved && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4 flex items-center space-x-3 text-green-500 text-sm font-bold"
                      >
                        <Check size={18} />
                        <span>
                          {language === 'en'
                            ? 'Meta Pixel ID successfully updated and loaded!'
                            : 'ID Pixel Meta mis à jour et chargé avec succès !'}
                        </span>
                      </motion.div>
                    )}

                    {/* Connection Status */}
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 space-y-3">
                      <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">
                        {language === 'en' ? 'Live Integration Status' : 'Statut de l\'Intégration Live'}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <span className={`h-2.5 w-2.5 rounded-full ${isInitialized ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                          {isInitialized
                            ? (language === 'en' ? 'Meta Pixel is Active & Running' : 'Le Pixel Meta est Actif')
                            : (language === 'en' ? 'Pixel Simulator (Dry Run Console Mode)' : 'Simulateur Pixel Actif (Console de test)')}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 font-medium">
                        {language === 'en'
                          ? 'Note: Environment variables can also define VITE_META_PIXEL_ID in production. Pasting it above will instantly override and persist locally for test runs.'
                          : 'Remarque : Les variables d\'environnement peuvent également définir VITE_META_PIXEL_ID en production. Le coller ci-dessus l\'enregistrera localement.'}
                      </p>
                    </div>

                    {/* Preconfigured Events Summary */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest">
                        {language === 'en' ? 'Preconfigured Lead Events' : 'Événements Prospects Préconfigurés'}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="bg-brand/5 rounded-xl p-4 border border-brand/10">
                          <p className="text-xs font-black text-brand uppercase tracking-wider mb-1">WhatsApp Bookings</p>
                          <p className="text-xs font-bold text-gray-500 dark:text-gray-400">Triggers standard "Lead" event when clients click to book via WhatsApp.</p>
                        </div>
                        <div className="bg-brand/5 rounded-xl p-4 border border-brand/10">
                          <p className="text-xs font-black text-brand uppercase tracking-wider mb-1">Manual Forms</p>
                          <p className="text-xs font-bold text-gray-500 dark:text-gray-400">Triggers standard "Lead" event when clients submit manual booking requests.</p>
                        </div>
                        <div className="bg-brand/5 rounded-xl p-4 border border-brand/10">
                          <p className="text-xs font-black text-brand uppercase tracking-wider mb-1">Setmore Schedulers</p>
                          <p className="text-xs font-bold text-gray-500 dark:text-gray-400">Triggers standard "Lead" event when clients choose to book on Setmore scheduler.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h4 className="text-base font-black text-gray-900 dark:text-white flex items-center">
                        <FileText size={18} className="text-brand mr-2" />
                        {language === 'en' ? 'How to configure your Lead Ads Campaign' : 'Comment configurer votre campagne de pubs de Leads'}
                      </h4>

                      <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 font-medium">
                        <div className="flex gap-3 items-start">
                          <div className="bg-brand/10 text-brand font-black rounded-lg h-6 w-6 flex items-center justify-center text-xs shrink-0 mt-0.5">1</div>
                          <div>
                            <p className="font-black text-gray-900 dark:text-white mb-1">Select the Lead Objective in Meta Ads Manager</p>
                            <p className="text-xs">When creating a new Campaign in Meta Ads Manager, select the <strong>Leads</strong> objective. This tells Facebook to optimize deliveries for users highly likely to book a service.</p>
                          </div>
                        </div>

                        <div className="flex gap-3 items-start">
                          <div className="bg-brand/10 text-brand font-black rounded-lg h-6 w-6 flex items-center justify-center text-xs shrink-0 mt-0.5">2</div>
                          <div>
                            <p className="font-black text-gray-900 dark:text-white mb-1">Configure Ad Set Conversion Location to "Website"</p>
                            <p className="text-xs">At the Ad Set level, set your conversion location to <strong>Website</strong>. Select your Meta Pixel and pick the <strong>Lead</strong> standard event as the optimization target.</p>
                          </div>
                        </div>

                        <div className="flex gap-3 items-start">
                          <div className="bg-brand/10 text-brand font-black rounded-lg h-6 w-6 flex items-center justify-center text-xs shrink-0 mt-0.5">3</div>
                          <div>
                            <p className="font-black text-gray-900 dark:text-white mb-1">Set Up Your Ad Creative</p>
                            <p className="text-xs">Select your beautiful lash/brow creatives or videos, and point the Destination URL to this website's URL. You can also append UTM tags to track which creatives perform best!</p>
                          </div>
                        </div>

                        <div className="flex gap-3 items-start">
                          <div className="bg-brand/10 text-brand font-black rounded-lg h-6 w-6 flex items-center justify-center text-xs shrink-0 mt-0.5">4</div>
                          <div>
                            <p className="font-black text-gray-900 dark:text-white mb-1">Verify Event Triggers with Meta Pixel Helper</p>
                            <p className="text-xs">Download the free <strong>Meta Pixel Helper</strong> Chrome Extension. Browse your website, click the booking buttons, and verify that the "Lead" event fires perfectly with the service and details.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand/5 border border-brand/10 rounded-2xl p-6 space-y-2">
                      <h4 className="text-xs font-black text-brand uppercase tracking-widest flex items-center">
                        <Code size={14} className="mr-1.5" />
                        {language === 'en' ? 'Developers & Advanced Marketers Note' : 'Note pour Développeurs & Marketeurs'}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {language === 'en'
                          ? 'This website has a dedicated, modular tracking module. You can find tracking bindings natively inside the source code components: Bookings are fully hooked inside BookingForm.tsx, and direct phone/whatsapp connects are tracked inside Contact.tsx.'
                          : 'Ce site web dispose d\'un module de suivi dédié. Vous pouvez trouver les liaisons de suivi nativement dans les composants du code source : Les réservations sont suivies dans BookingForm.tsx, et les appels/clics directs sont suivis dans Contact.tsx.'}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-100 dark:border-gray-900 bg-gray-50 dark:bg-gray-900/30 flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-900 dark:bg-white text-white dark:text-gray-950 px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-opacity"
                >
                  {language === 'en' ? 'Close Panel' : 'Fermer'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
