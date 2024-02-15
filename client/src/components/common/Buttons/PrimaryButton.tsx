interface PrimaryButtonProps {
  label: string;
  size: 'small' | 'medium' | 'large';
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  const { label, size } = props;

  let sizeStyle = '';

  switch (size) {
    case 'small':
      sizeStyle = 'text-sm px-2 py-1';
      break;
    case 'medium':
      sizeStyle = 'text-base p-4';
      break;
    case 'large':
      sizeStyle = 'text-lg px-6 py-2 md:px-12 md:py-4 font-semibold ';
      break;
    default:
      break;
  }

  return (
    <button className={`bg-primary text-white ${sizeStyle}`}>{label}</button>
  );
};

export default PrimaryButton;
