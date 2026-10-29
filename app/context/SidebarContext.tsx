'use client';

import {
	createContext,
	useContext,
	useState,
	useEffect,
	type ReactNode,
} from 'react';

type SidebarContextType = {
	isOpen: boolean;
	handleOpenSidebarMobile: () => void;
	setIsOpen: (value: boolean) => void;
};

const SidebarContext =
createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: {children: ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);

	function handleOpenSidebarMobile() {
		setIsOpen((prev) => !prev);
	}
	// lock scroll code ===
	useEffect(() => {
		document.body.style.overflow = isOpen ? 'hidden' : '';

		return () => {
		document.body.style.overflow = '';
		}
	}, [isOpen]);

	return (
		<SidebarContext.Provider
		value={{ isOpen, handleOpenSidebarMobile, setIsOpen }}
		>
			{children}
		</SidebarContext.Provider>
	);

}
export function useSidebar() {
	const context = useContext(SidebarContext);

	if (!context) {
		throw new Error('useSibar harus digunakan di dalam SidebarProvider');
	}
	return context;
}