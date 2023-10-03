import { Library, ListMusic, Mic2, Music2, PlayCircle } from "lucide-react";

export function Sidebar() {
    return (
        <>
            <div className="flex flex-col px-3 py-6 shadow w-60">
                <div className="space-y-3">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-xl font-bold">Discover</h2>
                            <div className="flex items-center gap-2 p-2 font-semibold cursor-pointer hover:bg-purple-600 rounded">
                                <PlayCircle size={20} />
                                <span>Listen Now</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="mb-4 text-xl font-bold">Library</h2>
                            <div className="flex items-center gap-2 p-2 font-semibold cursor-pointer hover:bg-purple-900 rounded">
                                <ListMusic size={20} />
                                <span>Playlists</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 font-semibold cursor-pointer hover:bg-purple-900 rounded">
                                <Music2 size={20} />
                                <span>Songs</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 font-semibold cursor-pointer hover:bg-purple-900 rounded">
                                <Mic2 size={20} />
                                <span>Artists</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 font-semibold cursor-pointer hover:bg-purple-900 rounded">
                                <Library size={20} />
                                <span>Albums</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="mb-4 text-xl font-bold">Playlists</h2>
                            <div className="flex items-center gap-2 p-2 font-semibold cursor-pointer hover:bg-purple-900 rounded">
                                <ListMusic size={20} />
                                <span>Recently Added</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 font-semibold cursor-pointer hover:bg-purple-900 rounded">
                                <ListMusic size={20} />
                                <span>Recently Played</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 font-semibold cursor-pointer hover:bg-purple-900 rounded">
                                <ListMusic size={20} />
                                <span>My Playlists 1</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}