import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import './featured.scss';

const Featured = ({ type }) => {
  return (
    <>
      <div className="featured">
        {type && (
          <div className="category">
            <span>{type === 'movie' ? 'Movies' : 'Series'}</span>
            <select name="genre" idd="genre">
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )}
        <img
          src="https://www.wallpaperflare.com/static/580/391/793/the-matrix-movies-neo-keanu-reeves-wallpaper.jpg"
          alt="movie cover"
        />

        <div className="info">
          <img
            src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
            alt=""
          />
          <span className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore,
            cum. Magni placeat doloremque quia dolores quibusdam. Ad modi error
            eum.um dolor sit amet consectetur, adipisicing elit. Inventore, cum.
            Magni placeat doloremque quia dolores quibusdam. Ad modi error
          </span>
          <div className="buttons">
            <button className="play">
              <PlayArrow /> <span>Play</span>
            </button>
            <button className="more">
              <InfoOutlined /> <span>More</span>
            </button>
          </div>
        </div>
      </div>
      <div className="shadow"></div>
    </>
  );
};

export default Featured;
