import './timelineApp.css';
import Timeline from './timeline'; 

function TimelineApp() {
  return (
    <>
      <div class="timeline-header">
        <div className='timeline-div'>
          <p>LEARN ABOUT KATY </p><br/>
          <span>
            Over a century of History and development
          </span>
        </div>
        <div class="line">
          <div class="dot">
          </div>
          <div class="dot">
          </div>
          <div class="dot">
          </div>
        </div>
      </div>
      <Timeline />
      <div className="line"></div>
    </>
  );
}

export default TimelineApp;