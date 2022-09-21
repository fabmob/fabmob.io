import { DarkModeToggle } from "react-dark-mode-toggle-2";
import { useColorScheme } from '../scripts/ColorScheme';

const ColorSchemeToggle = () => {
    const  [ value, setValue ] = useColorScheme();
    return (
        <DarkModeToggle
            onChange={setValue}
            isDarkMode={value} 
            size={40} 
        />
    );
};

export default ColorSchemeToggle;