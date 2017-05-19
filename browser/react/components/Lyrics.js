import React from 'react';

export default function (props) {
    const text = props.text;
    const setArtist = props.setArtist;
    const artistQuery = props.artistQuery;
    const setSong = props.setSong;
    const songQuery = props.songQuery;
    const handleSubmit = props.handleSubmit;

    const artistChange = e => {
        setArtist(e.target.value)
    }
    const songChange = e => {
        setSong(e.target.value);
    }
    return (
        <div id="lyrics">
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={artistQuery} placeholder="Artist" onChange={artistChange}></input>
                    <input type="text" value={songQuery} placeholder="Song" onChange={songChange}></input>
                </div>
                <pre>{text || 'Search above!'}</pre>
                <button type="submit">Search for Lyrics</button>
            </form>
        </div>
    );
}