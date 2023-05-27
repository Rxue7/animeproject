package com.animeproject.anime;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/animes")


public class AnimeController {
    @Autowired
    private AnimeService animeService;
    @CrossOrigin
    @GetMapping
    public ResponseEntity<List<Anime>> getAllAnimes(){
        return new ResponseEntity<List<Anime>>(animeService.allAnimes(), HttpStatus.OK);
    }
    @CrossOrigin
    @GetMapping("/{imdbId}")
    public ResponseEntity<Optional<Anime>> getSingleAnime(@PathVariable String imdbId){
       return new ResponseEntity<Optional<Anime>>(animeService.singleAnime(imdbId), HttpStatus.OK);
    }
}
