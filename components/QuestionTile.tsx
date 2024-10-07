type QuestionTileProps = {
  icon?: string;
  label: string;
};

const QuestionTile = ({ icon, label }: QuestionTileProps) => {
  return (
    <li className='border border-slate-300 py-8 px-12 bg-slate-200 text-slate-800 flex items-center gap-12 rounded-[30px] cursor-pointer'>
      {icon}
      <span className='uppercase text-[1.3rem] block'>{label}</span>
    </li>
  );
};

export default QuestionTile;
