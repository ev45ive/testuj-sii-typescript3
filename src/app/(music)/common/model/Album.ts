// Generated by https://quicktype.io
// https://developer.spotify.com/documentation/web-api/reference/get-an-album

import { Playlist } from "./Playlist";

export interface AlbumSearchResponse {
    albums: PagingObject<AlbumResponse>
}

export interface AlbumResponse extends Album {
    // id:                     string;
    // images:                 Image[];
    // name:                   string;
    album_type:             string;
    total_tracks:           number;
    available_markets:      string[];
    external_urls:          ExternalUrls;
    href:                   string;
    release_date:           string;
    release_date_precision: string;
    restrictions:           Restrictions;
    type:                   string;
    uri:                    string;
    artists:                Artist[];
    copyrights:             Copyright[];
    external_ids:           ExternalIDS;
    genres:                 string[];
    label:                  string;
    popularity:             number;
    tracks:                 PagingObject<Track>;
}

export interface Entity{
    id:                     string;
    name:                   string;
}

// Indexed Type 
export type PlaylistMap = {
  [id: Playlist["id"]]: Playlist ;
};

// const cache:EntityMap = {}
// cache['123'] = {id:'123'} as Playlist
// cache['345']?.id


export type TMap<T> = {
  [id: string]: T ;
};

export type EntityMap<T extends Entity> = {
  [id in T['id']]: T ;
};


export interface PagingObject<T> {
    href:     string;
    limit:    number;
    next:     string;
    offset:   number;
    previous: string;
    total:    number;
    items:    T[];
}
type AlbumsPage = PagingObject<Album>


export interface Album extends Entity{
    images: Image[];
}

export interface Artist extends Entity {
    external_urls: ExternalUrls;
    href:          string;
    type:          string;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Copyright {
    text: string;
    type: string;
}

export interface ExternalIDS {
    isrc: string;
    ean:  string;
    upc:  string;
}

export interface Image {
    url:    string;
    height: number;
    width:  number;
}

export interface Restrictions {
    reason: string;
}
export interface Track extends Entity{
    artists:           Artist[];
    available_markets: string[];
    disc_number:       number;
    duration_ms:       number;
    explicit:          boolean;
    external_urls:     ExternalUrls;
    href:              string;
    is_playable:       boolean;
    linked_from:       Artist;
    restrictions:      Restrictions;
    preview_url:       string;
    track_number:      number;
    type:              string;
    uri:               string;
    is_local:          boolean;
}
