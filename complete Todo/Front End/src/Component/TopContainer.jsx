export default function TopContainer({ getInputValue, getInputDate, addTask, inputValue, inputDate }) {
  return (
    <div className="flex gap-3 mb-6">
      <input
        type="text"
        placeholder="Enter task..."
        value={inputValue}
        onChange={(e) => getInputValue(e.target.value)}
        className="flex-1 p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none"
      />
      <input
        type="date"
        value={inputDate}
        onChange={(e) => getInputDate(e.target.value)}
        className="p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-purple-400 outline-none"
      />
      <button
        onClick={addTask}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md transition"
      >
        Add
      </button>
    </div>
  );
}
