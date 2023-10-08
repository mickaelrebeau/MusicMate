import { Plus } from 'lucide-react';
import { useState } from 'react';

export function ModalNewPlaylist() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 p-2 font-semibold cursor-pointer hover:bg-purple-900 rounded">
        <Plus size={30} />
        add a new playlist
      </button>
      {showModal && (
        <section className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl z-50">
            <div className="p-10 border-0 rounded-lg shadow-lg relative flex flex-col gap-6 w-full bg-slate-900 outline-none focus:outline-none">
              <h1 className="text-2xl font-bold text-center">New Playlist</h1>
              <form className="w-[400px] flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold mb-1" htmlFor="playlistName">
                    Playlist Name
                  </label>
                  <input
                    className="rounded p-2"
                    type="text"
                    id="playlistName"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-10 py-1 mt-4 rounded text-lg font-semibold border hover:bg-purple-900 hover:border-purple-900 hover:shadow-2xl hover:shadow-indigo-500/50">
                    Cancel
                  </button>
                  <button className="px-10 py-1 mt-4 rounded text-lg font-semibold hover:bg-gradient-to-r from-indigo-600 to-purple-400 hover:shadow-2xl hover:shadow-indigo-500/50">
                    Add Playlist
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            onClick={() => setShowModal(false)}
            className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </section>
      )}
    </>
  );
}
