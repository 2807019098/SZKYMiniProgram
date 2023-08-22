
const app = getApp();

Component({
    
    /**
     * 组件的属性列表
     */
    properties: {
        pageName: String,
        showNav: {
            type: Boolean,
            value: false
        },
        nameFlag: {
            type: Boolean,
            value: false
        },
        showHome: {
            type: Boolean,
            value: false
        },
        bgColor: String,
        fontColor: String,
        iconColor: String,
        iconHome: String,
        back: {
            type: Boolean,
            value: false
        },
        home: {
            type: Boolean,
            value: false
        },
        navleft: String,
        bordercolor: String,
        showBack: {
            type: Boolean,
            value: true
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        navHeight: app.globalData.navHeight,
        navTop: app.globalData.navTop,
        showMenu: false,
        menuButtonnavWidth: app.globalData.navWidth,
        menuButtonRight: app.globalData.menuButtonRight,
        height: app.globalData.height,
        statusLeft: app.globalData.left, 
        screenWidth: app.globalData.screenWidth
    },

    /**
     * 组件的方法列表
     */
    methods: {
        //回退
        navBack: function () {
            let pages = getCurrentPages();
            let prevPage = pages[pages.length - 2];
            try {
                
                wx.navigateBack({
                    delta: 1,
                    success: function (e) {
                        
                    }
                })

            } catch (e) {
                
            }
        },

        //回主页
        toIndex: function () {
            wx.switchTab({
                url: '/pages/index/index'
            })
        },

        getNav() {
            this.setData({
                showMenu: true
            })
        },

        getTabNav(e) {
            let url = e.currentTarget.dataset.url;
            switch(url){
                case "index":
                    wx.switchTab({
                        url: '/pages/index/index'
                    })
                    break;
                default: 
                    break;
            }
        },

        showMenuBox() {
            this.setData({
                showMenu: false
            })
        }
    }
})
