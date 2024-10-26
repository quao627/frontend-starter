import AuthenticatingConcept from "./concepts/authenticating";
import ChatConcept from "./concepts/chat";
import EventConcept from "./concepts/eventing";
import FriendingConcept from "./concepts/friending";
import PlaceConcept from "./concepts/place";
import PostingConcept from "./concepts/posting";
import ProfileConcept from "./concepts/profile";
import SessioningConcept from "./concepts/sessioning";

// The app is a composition of concepts instantiated here
// and synchronized together in `routes.ts`.
export const Sessioning = new SessioningConcept();
export const Authing = new AuthenticatingConcept("users");
export const Posting = new PostingConcept("posts");
export const Friending = new FriendingConcept("friends");
export const Eventing = new EventConcept("events");
export const Profiling = new ProfileConcept("profiles");
export const Chatting = new ChatConcept("chats");
export const Place = new PlaceConcept("places");
