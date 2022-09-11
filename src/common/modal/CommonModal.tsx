import { ReactNode } from 'react';

const CommonModal = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="listing_modal flex_center"
      onClick={(e) => {
        e?.stopPropagation();
      }}
    >
      {children}
    </div>
  );
};
export default CommonModal;
