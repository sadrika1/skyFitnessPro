type WorkoutModalType = {
  modalMyProgress: boolean;
  
  handleSetModalMyProgress: () => void;
  handleSetProgressIsSave: () => void;
};

export default function ModalProgress({
  modalMyProgress,
  handleSetModalMyProgress,
  handleSetProgressIsSave,
}: WorkoutModalType) {
  return (
    <>
      {modalMyProgress && (
        <div
          onClick={handleSetModalMyProgress}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center justify-center"
        >
          <div
            className="bg-white p-10 rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-4xl font-normal mb-12">Мой прогресс</h2>
            <div className="flex flex-col gap-5 mb-9 pr-5 h-80 w-w340px overflow-auto">
              <div className="flex flex-col gap-2.5">
                <span className="text-lg font-normal">
                  Сколько раз вы сделали наклоны вперед?
                </span>
                <input
                  className="py-4 px-5 outline-none border-slate-300 border-2 rounded-lg text-lg"
                  type="number"
                  placeholder="0"
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <span className="text-lg font-normal">
                  Сколько раз вы сделали наклоны назад?
                </span>
                <input
                  className="py-4 px-5 outline-none border-solid border-slate-300 border-2 rounded-lg text-lg"
                  type="number"
                  placeholder="0"
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <span className="text-lg font-normal">
                  Сколько раз вы сделали поднятие ног, согнутых в коленях?
                </span>
                <input
                  className="py-4 px-5 outline-none border-solid border-slate-300 border-2 rounded-lg text-lg"
                  type="number"
                  placeholder="0"
                />
              </div>
            </div>

            <button
              onClick={handleSetProgressIsSave}
              className="w-full bg-lime-400 py-4 font-normal rounded-full"
            >
              Сохранить
            </button>
          </div>
        </div>
      )}
    </>
  );
}
