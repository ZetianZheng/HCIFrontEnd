<script>
    import FullCalendar from '@fullcalendar/vue'
    import dayGridPlugin from '@fullcalendar/daygrid'
    import timeGridPlugin from '@fullcalendar/timegrid'
    import interactionPlugin from '@fullcalendar/interaction'
    import {INITIAL_EVENTS, createEventId} from '../JS/event-utils'

    export default {
        name: 'appHome',
        components: {
            FullCalendar, // make the <FullCalendar> tag available
        },
        data() {
            return {
                mission_title:"",
                mission_note:"",
                tempInfo:null,
                value1: [new Date('Tue Nov 24 2020 08:00:00 GMT+0800 (中国标准时间)'), new Date('Tue Nov 24 2020 08:00:00 GMT+0800 (中国标准时间)')],
                dialogVisible: false,
                innerVisible: false,
                calendarOptions: {
                    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                    headerToolbar: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    },
                    initialView: 'dayGridMonth',
                    initialEvents: INITIAL_EVENTS,
                    editable: true,
                    selectable: true,
                    selectMirror: true,
                    dayMaxEvents: true,
                    weekends: true,
                    eventClick: this.handleEventClick,
                    eventsSet: this.handleEvents,
                    dateClick: this.handleDateClick,
                    timeZone: 'UTC'
                },
              currentEvent: [],
              info: null
            }
        },

        methods: {
            handleDateClick: function (selectInfo) {
              // let title = prompt('please enter a new event')
              this.mission_title = "";
              this.tempInfo = selectInfo;
              if(selectInfo.allDay == true) {
                this.$set(this.value1, 0, new Date(selectInfo.dateStr));
                this.$set(this.value1, 1, new Date(this.value1[0].setDate(this.value1[0].getDate()+1)));
              }else {
                this.$set(this.value1, 0, new Date(selectInfo.dateStr));
                this.$set(this.value1, 1, new Date(selectInfo.dateStr));
              }
              console.log('selectInfo',this.tempInfo);
              console.log('value1',this.value1);
              console.log('done');
              this.dialogVisible = true;
            },
          addEvent() {
            console.log('2',this.tempInfo)
            createEventId()
            let calendarApi = this.tempInfo.view.calendar
            calendarApi.unselect() // clear date selection
            calendarApi.addEvent({
              id: createEventId(),
              title: this.mission_title,
              start: this.tempInfo.dateStr,
              end: this.tempInfo.endStr,
              allDay: this.tempInfo.allDay
            })
            this.tempInfo = null
            this.mission_title = ''
            this.closeDialog()
          },
            handleEventClick(clickInfo) {
              this.dialogVisible = true;
              this.currentEvent = clickInfo.event
              this.mission_title = this.currentEvent.title
              if(this.currentEvent.allDay == true){
                this.$set(this.value1, 0, new Date(this.currentEvent.start));
                this.$set(this.value1, 1, new Date(this.value1[0].getDate()+1));
              }else if(this.currentEvent.end == null){
                this.value1[0] = new Date(this.currentEvent.start)
                this.value1[1].setHours(this.value1[0].getHours()+1)
              }else {
                this.value1[0] = new Date(this.currentEvent.start)
                this.value1[1] = new Date(this.currentEvent.end)
              }
              console.log('clickinfo',this.currentEvent)
              // clickInfo.event.remove()

            },

            deleteEvent(Info) {
              Info.remove()
            },
            closeDialog() {
              this.dialogVisible = false;
              this.innerVisible = false;
              this.mission_title="";
              this.mission_note=""
            },
            closeDelete(){
              this.closeDialog()
              this.deleteEvent(this.currentEvent)
            }
        },
      // mounted() {
      //   this.axios
      //           .get('http://localhost:8080/hello/',{
      //             headers: {
      //               'Access-Control-Allow-Origin': '*',
      //             },
      //             proxy:{
      //               host:'192.168.1.156',
      //               port: '8080'
      //             }
      //           })
      //           .then(response => {(this.info = response.data);
      //           console.log(this.info)})
      //           .catch(function (error) { // 请求失败处理
      //             console.log(error);
      //           });
      // }
    }
</script>
<template>
  <div>
      <el-dialog title="eventManager" :visible.sync="dialogVisible" :destroy-on-close="true">
        <el-dialog
                width="30%"
                title="Delete Confirm"
                :visible.sync="innerVisible"
                append-to-body>
          <p class="delete_line">Ensure to delete this mission?</p>
          <div slot="footer" class="dialog-footer">
            <el-button @click="innerVisible=false">cancel</el-button>
            <el-button type="danger" @click="closeDelete">delete</el-button>
          </div>
        </el-dialog>
        <div class="missionContainer">
          <el-row  type="flex" class="mission" justify="center">
            <el-col :span="5"><p style="line-height: 40px">mission title:</p></el-col>
            <el-col :span="20"><el-input v-model="mission_title" placeholder="title"></el-input></el-col>
          </el-row>
          <el-row  type="flex" class="mission" justify="center">
            <el-col :span="5"><p>notes: </p></el-col>
            <el-col :span="20"><el-input
                    type="textarea"
                    :rows="4"
                    placeholder="content"
                    v-model="mission_note">
            </el-input></el-col>
          </el-row>
        </div>
        <div class="timeContainer">
          <el-date-picker
                  v-model="value1"
                  type="datetimerange"
                  range-separator="-"
                  start-placeholder="Start date"
                  end-placeholder="End date"
                  align="right"
                  value-format="timestamp">
          </el-date-picker>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button type ="danger" @click="innerVisible=true">delete</el-button>
          <el-button type="primary" @click="addEvent()">confirm</el-button>
        </div>
      </el-dialog>
    <FullCalendar :options="calendarOptions">
      <template v-slot:eventContent='arg'>
        <b>{{ arg.timeText}} </b>
        <i>{{ arg.event.title}}</i>
      </template>
    </FullCalendar>
  </div>
</template>

<style lang="less" scoped>

  .mission{
    @texth: auto;
    height: @texth;
    margin-bottom: 20px;
    p{
      line-height: 100%;
      text-align: center;
    }
    .el-input{
      width: 100%;
    }
  }
  .timeContainer{
    .el-date-editor {
      width: 100%;
      .el-range-separator{
        width:30px;
      }
    }
  }
  .delete_line {
    line-height: 40px;
    text-align: center;
    font-size: large;
  }

</style>