const Footer = () => {
  return (
    <div>
      <div className="bg-gray max-w-[1170px] mx-auto text-white pt-[50px]  pb-[15px] px-28">
        <div className="grid grid-cols-4 max-w-[990px]">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Audience</h1>
            <ul>
              {[1, 2, 3, 4, 5].map(() => {
                return <li className="underline">Students</li>;
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Formalities</h1>
            <ul>
              {[1, 2, 3, 4, 5].map(() => {
                return <li className="underline">Students</li>;
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Services</h1>
            <ul className="underline">
              {[1, 2, 3, 4, 5].map(() => {
                return <li>Students</li>;
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Organization</h1>
            <ul>
              {[1, 2, 3, 4, 5].map(() => {
                return <li className="underline">Students</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
