// src/components/ThemeComponent.jsx
"use client";
import { useContext } from 'react';
import ThemeContext from '@/contexts/ThemeContext';

// ThemeComponent 컴포넌트 정의
export default function ThemeComponent() {
  // ThemeContext에서 theme와 setTheme 가져오기
  const { theme, setTheme } = useContext(ThemeContext);

  // 테마를 토글하는 함수 정의
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // 현재 테마에 따라 배경색과 글자색 변경
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <p>현재 테마: {theme}</p>
    </div>
  );
}