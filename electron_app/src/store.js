import { reactive } from 'vue';

export const store = reactive({
    is_start_screen: false, // if the start screen is showing or not
    app_object: {},
    should_show_dialog_on_quit: false,  // should ask "do you wanna quit" on closing
    show_dialog_on_quit_msg: "",  // the message to show while quiting 
    show_splash_screen: true, // is showing the loading splash screen
    logs: "",
    global_loader_modal_msg: "",
    history: {},
    show_history_in_oldest_first: false
});