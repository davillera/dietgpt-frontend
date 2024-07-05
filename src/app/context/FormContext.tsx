"use client"
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface FormContextProps {
	FormData: any;
	setData: (data: any) => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [FormData, setData] = useState<any>(null);

	return (
		<FormContext.Provider value={{ FormData, setData }}>
			{children}
		</FormContext.Provider>
	);
};

export const useFormContext = () => {
	const context = useContext(FormContext);
	if (!context) {
		throw new Error('useFormContext must be used within a FormProvider');
	}
	return context;
};
