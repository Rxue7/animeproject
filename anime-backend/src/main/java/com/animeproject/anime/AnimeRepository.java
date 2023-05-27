package com.animeproject.anime;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AnimeRepository extends MongoRepository<Anime, ObjectId> {
    Optional<Anime> findAnimeByImdbId(String imdbId);
}
