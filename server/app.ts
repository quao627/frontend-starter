import AuthenticatingConcept from "./concepts/authenticating";
import FriendingConcept from "./concepts/friending";
import PostingConcept from "./concepts/posting";
import SessioningConcept from "./concepts/sessioning";
import EventConcept from "./concepts/eventing";
import ProfileConcept from "./concepts/profile";
import ChatConcept from "./concepts/chat";
import PlaceConcept from "./concepts/place";

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