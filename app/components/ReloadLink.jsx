"use client";

export default function ReloadLink({ href, children, className }) {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = href; // force full reload
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}