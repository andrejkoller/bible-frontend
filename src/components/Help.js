const Help = () => {
  return (
    <div className="help-container">
      <div className="help-content">
        <div className="help-description">
          <div className="help-item">
            <h3>Select a Bible Version</h3>
            <p>Choose from different translations to suit your preference.</p>
          </div>
          <div className="help-item">
            <h3>Search for Verses</h3>
            <p>Use the search function to quickly find specific verses.</p>
          </div>
          <div className="help-item">
            <h3>Bookmark & Highlight</h3>
            <p>Save important passages and add personal highlights.</p>
          </div>
          <div className="help-item">
            <h3>Switch Themes</h3>
            <p>
              Toggle between Light and Dark Mode for a comfortable reading
              experience.
            </p>
          </div>
        </div>
        <div className="help-description">
          <p>Frequently Asked Questions</p>
          <div className="help-item">
            <h3>Can I use the app offline?</h3>
            <p>
              Currently, an internet connection is required to fetch Bible
              texts, but offline support is planned for future updates.
            </p>
          </div>
          <div className="help-item">
            <h3>How do I report a bug?</h3>
            <p>
              Please report any issues via{" "}
              <a href="mailto:andrejkoller@outlook.com">
                andrejkoller@outlook.com
              </a>
            </p>
          </div>
          <div className="help-item">
            <h3>Can I customize the font and text size?</h3>
            <p>
              Yes! You can adjust the font style and size in the settings menu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
