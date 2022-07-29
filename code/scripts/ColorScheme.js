import { useEffect, useMemo } from 'react';
import createPersistedState from 'use-persisted-state';

const useColorSchemeState = createPersistedState('colorScheme');

export function useColorScheme() {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const [isDark, setIsDark] = useColorSchemeState();
    const value = useMemo(() => isDark === undefined ? !!systemPrefersDark : isDark,
    [isDark, systemPrefersDark])
    useEffect(() => {
    if (value) {
        console.log("add dark")
        document.body.classList.add('dark');
    } else {
        console.log("rm dark")
        document.body.classList.remove('dark');
    }
    }, [value]);
    return [value, setIsDark]
}