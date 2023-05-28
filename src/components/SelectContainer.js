
const MainContainer = () => {
  return (
    <div>
        <div
        className="desktop_tab"
        style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between"

        }}>
            <div className="tab">
                <button className="tablinks active">
                    All Posts
                </button>
                <button class="tablinks" onclick="openTab(event, 'article')">
                    Article
                </button>
                <button class="tablinks" onclick="openTab(event, 'event')">
                  Event
                </button>
                <button class="tablinks" onclick="openTab(event, 'education')">
                  Education
                </button>
                <button class="tablinks" onclick="openTab(event, 'job')">
                  Job
                </button>
                </div>
                <div className="desktop_filter">
                    <div className="desktop_filter_div">
                        <select name="filter" id="filter"></select>
                    </div>
                    <button className="desktop_filter_btn">
                    <i class="fas fa-group"></i>Join a Group
                    </button>
                </div>
        </div>
    </div>
  )
}

export default MainContainer;