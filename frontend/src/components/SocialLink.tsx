import React, { ReactNode } from 'react';

type SocialLinkProps = {
  href: string;
  label: string;
  path: ReactNode;
  iconSize?: number;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, label, path, iconSize = 8 }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="text-white hover:text-bgreen"
      aria-label={label}
    >
      <svg className={`w-${iconSize} h-${iconSize}`} fill="currentColor" viewBox="0 0 24 24">
        {path}
      </svg>
    </a>
  );
};

export default SocialLink;
