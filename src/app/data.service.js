"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataService = /** @class */ (function () {
    function DataService() {
        this.data = [
            { english: "book", chinese: "chinese", img: "chair.png" },
            { english: "book", chinese: "chinese", img: "chair.png" },
            { english: "book", chinese: "chinese", img: "chair.png" },
            { english: "book", chinese: "chinese", img: "chair.png" },
            { english: "book", chinese: "chinese", img: "chair.png" },
            { english: "book", chinese: "chinese", img: "chair.png" },
            { english: "book", chinese: "chinese", img: "chair.png" },
            { english: "book", chinese: "chinese", img: "chair.png" }
        ];
    }
    DataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBTTNDO0lBRUE7UUFFRSxTQUFJLEdBQUc7WUFDTCxFQUFFLE9BQU8sRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFDO1lBQ3ZELEVBQUUsT0FBTyxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUM7WUFDdkQsRUFBRSxPQUFPLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBQztZQUN2RCxFQUFFLE9BQU8sRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFDO1lBQ3ZELEVBQUUsT0FBTyxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUM7WUFDdkQsRUFBRSxPQUFPLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBQztZQUN2RCxFQUFFLE9BQU8sRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFDO1lBQ3ZELEVBQUUsT0FBTyxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUM7U0FDeEQsQ0FBQTtJQVhhLENBQUM7SUFGSixXQUFXO1FBSnZCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDOztPQUVXLFdBQVcsQ0FjdkI7SUFBRCxrQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcblxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcblxuY29uc3RydWN0b3IoKSB7IH1cblxuICBkYXRhID0gW1xuICAgIHsgZW5nbGlzaDpcImJvb2tcIiwgY2hpbmVzZTogXCJjaGluZXNlXCIsIGltZzogXCJjaGFpci5wbmdcIn0sXG4gICAgeyBlbmdsaXNoOlwiYm9va1wiLCBjaGluZXNlOiBcImNoaW5lc2VcIiwgaW1nOiBcImNoYWlyLnBuZ1wifSxcbiAgICB7IGVuZ2xpc2g6XCJib29rXCIsIGNoaW5lc2U6IFwiY2hpbmVzZVwiLCBpbWc6IFwiY2hhaXIucG5nXCJ9LFxuICAgIHsgZW5nbGlzaDpcImJvb2tcIiwgY2hpbmVzZTogXCJjaGluZXNlXCIsIGltZzogXCJjaGFpci5wbmdcIn0sXG4gICAgeyBlbmdsaXNoOlwiYm9va1wiLCBjaGluZXNlOiBcImNoaW5lc2VcIiwgaW1nOiBcImNoYWlyLnBuZ1wifSxcbiAgICB7IGVuZ2xpc2g6XCJib29rXCIsIGNoaW5lc2U6IFwiY2hpbmVzZVwiLCBpbWc6IFwiY2hhaXIucG5nXCJ9LFxuICAgIHsgZW5nbGlzaDpcImJvb2tcIiwgY2hpbmVzZTogXCJjaGluZXNlXCIsIGltZzogXCJjaGFpci5wbmdcIn0sXG4gICAgeyBlbmdsaXNoOlwiYm9va1wiLCBjaGluZXNlOiBcImNoaW5lc2VcIiwgaW1nOiBcImNoYWlyLnBuZ1wifVxuICBdXG59XG4iXX0=