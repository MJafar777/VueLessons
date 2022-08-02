import { createApp } from "vue";

import App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
import AddFriend from "./components/addFriend.vue";
const app = createApp(App);

app.component("friend-contact", FriendContact);
app.component("add-friend", AddFriend);

app.mount("#app");
