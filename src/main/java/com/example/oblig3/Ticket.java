package com.example.oblig3;

public class Ticket {
    private int id;
    private String movie;
    private int number;
    private String firstname;
    private String lastname;
    private String phonenb;
    private String email;

    public Ticket(int id, String movie, int number, String firstname, String lastname, String phonenb, String email) {
        this.id = id;
        this.movie = movie;
        this.number = number;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phonenb = phonenb;
        this.email = email;
    }
    public Ticket(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMovie() {
        return movie;
    }

    public void setMovie(String movie) {
        this.movie = movie;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getPhonenb() {
        return phonenb;
    }

    public void setPhonenb(String phonenb) {
        this.phonenb = phonenb;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
