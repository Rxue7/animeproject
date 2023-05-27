package com.animeproject.anime;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class AnimeService {
    @Autowired
    private AnimeRepository animeRepository;
    public List<Anime> allAnimes(){
        return animeRepository.findAll();
    }

    public Optional<Anime> singleAnime(String imdbId){
        return animeRepository.findAnimeByImdbId(imdbId);
    }
}
