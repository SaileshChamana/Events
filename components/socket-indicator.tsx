"use client"

import { useSocket } from "./providers/socket-provider"
import { Badge } from "./ui/badge"

export const SocketIndicator = () => {
    const { isConnected } = useSocket();

    if(!isConnected){
        return (<Badge variant="outline" className="bg-yellow-600 text-white border-none">
            Fallback: Pooling every 1s
        </Badge>)
    }
    else{
        return (<Badge variant="outline" className="bg-blue-600 text-white border-none">
            Live: Real-time updates
        </Badge>)
    }
}