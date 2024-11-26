function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Social Section */}
          <div className="col-span-1">
            <h3 className="text-2xl font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="https://jsdc.tw" className="text-gray-500 hover:text-gray-900">JSDC.TW</a></li>
              <li><a href="https://www.facebook.com/JSDC.TW/" className="text-gray-500 hover:text-gray-900">JSDC Facebook</a></li>
              <li><a href="https://x.com/jsdc_tw" className="text-gray-500 hover:text-gray-900">JSDCT witter</a></li>
            </ul>
          </div>

          {/* About Section */}
          <div className="col-span-1">
            <h3 className="text-2xl font-semibold mb-4">Organizers</h3>
            <ul className="space-y-2">
              <li><a href="https://exma-square.co" className="text-gray-500 hover:text-gray-900">皇漢科技 EXMA-Square</a></li>
              <li><a href="https://www.facebook.com/dscareer/?locale=zh_TW" className="text-gray-500 hover:text-gray-900">資料科學家的工作日常</a></li>
              <li><a href="https://hackmd.io/8KIFgcOWRbq5bvdiEHqlLw" className="text-gray-500 hover:text-gray-900">Tech Book Community</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="col-span-1">
            <h3 className="text-2xl font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="mailto:hq@jsdc.tw" className="text-gray-500 hover:text-gray-900">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 lg:mt-12 pt-8 border-t border-gray-200">
          <div className="text-gray-500 text-sm">
            <p className="text-center mb-4">© 2024 JSDC.TW</p>
            <div className="text-left space-y-1 px-2 lg:px-0">
              <p>All rights reserved.</p>
              <p>This online event follows our Code of Conduct and is committed to providing a harassment-free conference experience for everyone.</p>
              <p>Content licensed under CC BY-NC-SA 4.0 unless otherwise noted.</p>
              <p>版權所有。</p>
              <p>本線上活動遵循我們的行為準則，致力於為所有參與者提供無騷擾的會議體驗。</p>
              <p>除非另有說明，內容採用 CC BY-NC-SA 4.0 授權。</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 