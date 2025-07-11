function Video(){
    return ( 
        <div className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
            {/* Thumbnail */}
            <div>
                <img 
                    src="https://placehold.co/400x225" 
                    alt="video thumbnail" 
                    className="w-full aspect-video object-cover"
                />
            </div>
            
            {/* Video Info */}
            <div className="p-3">
                <h3 className="font-medium text-sm truncate">
                    Title
                </h3>
                <div className="flex items-center gap-2 mt-2">
                    <img 
                        src="https://placehold.co/32x32" 
                        alt="user avatar" 
                        className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1">
                        <p className="text-sm text-gray-400">Username</p>
                        <p className="text-xs text-gray-500">0 views • 0 days ago</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Video;