#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

#[macro_use]
extern crate tauri;

mod cmd;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![cmd::calculate::calculate])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
