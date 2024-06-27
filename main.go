package main

import (
	"html/template"
	"net/http"
	"os"
)

var tpl = template.Must(template.ParseFiles("frontend/dist/index.html"))

func indexHandler(w http.ResponseWriter, r *http.Request) {
	tpl.Execute(w, nil)
}

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	mux := http.NewServeMux()

	fs := http.FileServer(http.Dir("frontend/dist"))
	//mux.Handle("/", http.StripPrefix("/", fs))

	mux.HandleFunc("/", indexHandler)
	http.ListenAndServe(":"+port, fs)
}
