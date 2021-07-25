import { gql } from "apollo-server";

export default gql`
  type Song {
    id: ID
    title: String
    s3_link: String
    duration: String
    artist: Artist
    album: Album
    playlist: [Playlist]
  }
  type Artist {
    id: ID
    name: String
    picture: String
    songs: [Song]
    albums: [Album]
  }
  type Album {
    id: ID
    title: String
    picture: String
    artist: Artist
    songs: [Song]
  }
  type Playlist {
    id: ID
    title: String
    description: String
    picture: String
    songs: [Song]
    user: User
  }
  type User {
    id: ID
    firstName: String
    lastName: String
    picture: String
    playlists: [Playlist]
    role: String
    username: String
  }
  type Query {
    songs: [Song]
    song(id: ID!): Song
    artists: [Artist]
    artist(id: ID!): Artist
    albums: [Album]
    album(id: ID!): Album
    playlists: [Playlist]
    playlist(id: ID!): Playlist
  }
`;
