type QuestionTileProps = {
  icon?: string;
  label: string;
};

const QuestionTile = ({ icon, label }: QuestionTileProps) => {
  return (
    <li className='border border-slate-300 py-4 px-8 bg-slate-200 text-slate-800 flex items-center gap-12 rounded-[30px] cursor-pointer'>
      {icon}
      <span className='uppercase text-[.8rem] font-semibold block'>
        {label}
      </span>
    </li>
  );
};

export default QuestionTile;
