import React from "react";

function ProfileForm() {
  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor="name" className="font-semibold mt-4">
          Display Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="w-full flex border border-gray-400 outline-none focus:outline-none py-2 px-2 rounded-lg mt-2"
        />
        <span className="mt-2 text-gray-500">
          Name entered above will be used for all issued certificates
        </span>
      </div>

      <div className="flex flex-col mt-3">
        <label htmlFor="about" className="font-semibold">
          About
        </label>
        <textarea
          name="about"
          id="about"
          cols="60"
          rows="3"
          className="border border-gray-500 outline-none focus:outline-none rounded-lg resize-none px-2 py-2 mt-2"
        ></textarea>
      </div>

      <div className="mt-3">
        <label htmlFor="profession" className="font-semibold">
          Profession
        </label>
        <input
          type="text"
          placeholder="write your profession"
          className="py-2 px-2 outline-none focus:outline-none border border-gray-500 flex flex-col w-full rounded-lg mt-2"
        />
      </div>

      <div className="mt-3">
        <label htmlFor="birhtDate" className="font-semibold">
          Date of birth
        </label>
        <input
          type="date"
          className="outline-none focus:outline-none w-full border border-gray-500 rounded-lg py-2 px-2 mt-2"
        />
      </div>

      <div className="mt-3">
        <label htmlFor="Gender" className="font-semibold">
          Gender
        </label>
        <input
          type="text"
          className="outline-none focus:outline-none w-full border border-gray-500 rounded-lg py-2 px-2 mt-2"
          placeholder="Gender"
        />
      </div>

      {/* section visibility */}
      <div className="bg-[#fafafa] rounded-lg px-3 py-3 mt-8">
        <div className="flex flex-col">
          <span className="font-bold">Section Visibility</span>
          <span className="text-gray-600">
            Select which sections and content shows on your profile page
          </span>
        </div>

        <div className="flex mt-5 items-center justify-center space-x-8">
          <div className="flex flex-col">
            <span className="font-bold">Followers and Following</span>
            <span className="text-gray-500">
              Show your followers and the users you follow on codedamn
            </span>
          </div>
          <div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-gray-200 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <div className="flex mt-5 items-center justify-between space-x-8">
          <div className="flex flex-col">
            <span className="font-bold">XP</span>
            <span className="text-gray-500">Show the XP you have earned</span>
          </div>
          <div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-gray-200 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>

        <div className="flex mt-5 items-center justify-between space-x-8">
          <div className="flex flex-col">
            <span className="font-bold">Achievments badges</span>
            <span className="text-gray-500">
              show your relative percentile and proficiency
            </span>
          </div>
          <div>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-gray-200 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4 my-6">
        <button className="bg-[#f4f4f5] px-2 py-2 font-semibold rounded-lg">Cancel</button>
        <button className="bg-[#4f46e5] px-2 py-2 font-semibold rounded-lg text-white">Save Changes</button>
      </div>
    </div>
  );
}

export default ProfileForm;
