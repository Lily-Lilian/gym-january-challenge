const Form = () => {
  return (
    <div>
      <div className="bg-beige max-w-[630px] mx-auto px-5 py-3 mt-10">
        <div class="mb-4 max-w-[582px]">
          <label for="email" class="block text-gray-700 font-medium mb-2">
            Begriff
          </label>
          <input
            type="email"
            id="email"
            placeholder="Suchen Sie nach Begriffen aus dem Uni-Glossar"
            class="bg-white border border-white py-[14px] px-[12px] w-full leading-5 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <div>
          <button className="bg-blue font-semibold mb-[15px] text-white py-[16px] px-[35px]">
            BEGRIFF SUCHEN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
