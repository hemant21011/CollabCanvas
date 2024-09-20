import {
  createClient,
  LiveList,
  LiveMap,
  LiveObject,
} from "@liveblocks/client";
import type { Layer, Color } from "@/types/canvas";

// Global declaration for Liveblocks
declare global {
  interface Liveblocks {
    // Each user's Presence, for useMyPresence, useOthers, etc.
    Presence: {
      cursor: { x: number; y: number } | null;
      selection: string[];
      pencilDraft: [x: number, y: number, pressure: number][] | null;
      pencilColor: Color | null;
    };

    // The Storage tree for the room, for useMutation, useStorage, etc.
    Storage: {
      layers: LiveMap<string, LiveObject<Layer>>;
      layerIds: LiveList<string>;
    };

    // Custom user info set when authenticating with a secret key
    UserMeta: {
      id?: string;
      info?: {
        name?: string;
        picture?: string;
      };
    };

    // Custom events, for useBroadcastEvent, useEventListener
    RoomEvent: {
      // Example events, add as needed
      // | { type: "PLAY" }
      // | { type: "REACTION"; emoji: "🔥" };
    };

    // Custom metadata set on threads, for useThreads, useCreateThread, etc.
    ThreadMetadata: {
      // Example: attaching coordinates to a thread
      // x: number;
      // y: number;
    };

    // Custom room info set with resolveRoomsInfo, for useRoomInfo
    RoomInfo: {
      // Example: rooms with a title and url
      // title: string;
      // url: string;
    };
  }
}

export {};