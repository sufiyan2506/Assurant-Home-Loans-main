import React, { createContext, useContext, useState } from 'react';

interface UIContextType {
  isInquiryModalOpen: boolean;
  openInquiry: () => void;
  closeInquiry: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const openInquiry = () => setIsInquiryModalOpen(true);
  const closeInquiry = () => setIsInquiryModalOpen(false);

  return (
    <UIContext.Provider value={{ isInquiryModalOpen, openInquiry, closeInquiry }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};
