package com.example.demo;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, Springvggg Boot!";
    }
    @GetMapping("/greet")
    public String greet(@RequestParam(name="Guest",defaultValue="stranger") String name) {
        return "Hello, " + name + "!";
    }
    @PostMapping("/json-greet")
    public String greetJson(@RequestBody Map<String, String> payload) {
        String name = payload.getOrDefault("name", "stranger");
        return "Hello from JSON, " + name + "!";
    }
    @GetMapping("/person")
    public Map<String, Object> getPerson() {
        Map<String, Object> person = new HashMap<>();
        person.put("ime", "Hazim");
        person.put("godine", 22);
        return person;
    }



}
